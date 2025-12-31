import { useState, useCallback, useRef, useEffect } from 'react';

interface NavbarState {
    activeMenu: string | null;
    isAnyMenuOpen: boolean;
}

// Global navbar state to coordinate between all dropdown components
let globalNavbarState: NavbarState = {
    activeMenu: null,
    isAnyMenuOpen: false
};

const subscribers = new Set<(state: NavbarState) => void>();

export const useNavbarState = (menuId: string) => {
    const [localState, setLocalState] = useState(globalNavbarState);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Subscribe to global state changes
    useEffect(() => {
        const callback = (state: NavbarState) => setLocalState(state);
        subscribers.add(callback);
        return () => {
            subscribers.delete(callback);
        };
    }, []);

    // Update global state and notify all subscribers
    const updateGlobalState = useCallback((newState: Partial<NavbarState>) => {
        globalNavbarState = { ...globalNavbarState, ...newState };
        subscribers.forEach(callback => callback(globalNavbarState));
    }, []);

    const openMenu = useCallback((immediate = false) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (immediate || !globalNavbarState.isAnyMenuOpen) {
            // Open immediately if no menu is open or if requested
            updateGlobalState({
                activeMenu: menuId,
                isAnyMenuOpen: true
            });
        } else {
            // If another menu is open, switch immediately
            updateGlobalState({
                activeMenu: menuId,
                isAnyMenuOpen: true
            });
        }
    }, [menuId, updateGlobalState]);

    const closeMenu = useCallback((delay = 150) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            updateGlobalState({
                activeMenu: null,
                isAnyMenuOpen: false
            });
        }, delay);
    }, [updateGlobalState]);

    const closeAllMenus = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        updateGlobalState({
            activeMenu: null,
            isAnyMenuOpen: false
        });
    }, [updateGlobalState]);

    return {
        isOpen: localState.activeMenu === menuId,
        isAnyMenuOpen: localState.isAnyMenuOpen,
        activeMenu: localState.activeMenu,
        openMenu,
        closeMenu,
        closeAllMenus
    };
};