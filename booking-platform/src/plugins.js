export const plugins = [
    {
        id: 'contentful',
        resolve: require('@botonic/plugin-contentful'),
        options: {
            spaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
            accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        },
    }
]
