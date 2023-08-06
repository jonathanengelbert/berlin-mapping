export const navItems = [
    {
        index: 0,
        description: 'Home',
        route: '/',
    },
    {
        index: 1,
        description: 'Map',
        route: '/map',
    },
    {
        index: 2,
        description: 'About',
        route: '/about',
    },
];

export const leafletBaseLayers = {
    defaultBaseLayer: {
        attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
                      &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> 
                      &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> 
                      contributors`,
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    }
}