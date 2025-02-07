const { rules } = require("eslint-plugin-react-refresh");
const { browser } = require("globals");

module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:tailwindcss/recommended",
    ],
    ignorePatterns: ["dist", "eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json", "tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["react-refresh", "@typescript-eslint", "react", "tailwindcss"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};





// const { rules } = require("eslint-plugin-react-refresh")
// const { browser } = require("globals")

// module.exports = {
//     root: true,
//     env: {browser: true, es2020: true },
//     extends: [
// 			"eslint:recommended",
// 			"plugin:@typescript-eslint/recommended",
// 			"plugin:@typescript-eslint/recommended-type-checked",
// 			"plugin:@typescript-eslint/stylistic-type-checked",
// 			"plugin:react-hooks/recommended",
// 			"plugin:react/recommended",
// 			"plugin:react/jsx-runtime",
// 			"plugin:tailwindcss/recommended",
// 		],
//     ignorePatterns: ["dist", "eslintrc.cjs"],
//     parser: "@typescript-eslint/parser", 
//     parserOption: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         project: ["tsconfig.json", "tsconfig.node.json"],
//         tsconfigRootDir: __dirname
//     },
//     plugins: ["react-refresh", "@tupescript-eslint", "react"], 
//     rules: {
//         "react-refresh/only-export-components": [
//             "warn", 
//             { allowConstantExport: true },
//         ],
//         "@typescript-eslint/no-unsafe-call": "off",
//         "@typescript-eslint/no-unsafe-assignment": "off",
        
//     },
//     setting: {
//         react: {
//             version: "detect"
//         }
//     }
// }