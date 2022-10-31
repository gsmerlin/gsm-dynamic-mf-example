import Cors from 'cors';

export let theme = {
    variants: {
        primary: '#9A1663',
        secondary: '#E0144C',
        light: '#FF5858',
        dark: '#DC5F00',
        success: '#F8CB2E',
        info: '#34B3F1',
        warning: '#FFDE00',
        danger: '#D2001A',
    },
    typography: {
        font: "sans-serif",
        color: "#fff",
        size: {
            h1: "3em",
            h2: "2.5em",
            h3: "2.0em",
            h4: "1.5em",
            default: "1.0em",
            caption: "0.5em",
        },
        weight: {
            regular: 400,
            bold: 600
        }
    }
}

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

const runMiddleware = (req, res, fn) => new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })

const editTheme = (req, res) => {
    const newTheme = JSON.parse(req.body);
    theme = {
        ...theme,
        ...newTheme,
    }
    getTheme(req, res);
}

const getTheme = (req, res) => res.status(200).send(theme);

const handlers = {
    "GET": getTheme,
    "POST": editTheme,
}

export default async (req, res) => {
    await runMiddleware(req, res, cors)
    handlers[req.method](req, res);
}
