module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true,
		'react-native/react-native': true,
	},
	extends: [
		'airbnb',
		'plugin:react-native/all',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'react-native'],
	settings: {
		'import/resolver': {
			typescript: {},
			'babel-plugin-root-import': {
				rootPathSuffix: 'app',
				rootPathPrefix: '~',
			},
			node: {
				extensions: ['.js', '.jsx', 'ts', '.tsx'],
			},
		},
	},
	globals: {
		ios: false,
		android: false,
		windowHeight: false,
		windowWidth: false,
		hairlineWidth: false,
		DeviceInfo: false,
		isIphoneX: false,
		StatusBarHeight: false,
		HeaderHeight: false,
	},
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'no-param-reassign': [2, { props: false }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'jsx-a11y/label-has-associated-control': 'off',
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'react-native/no-color-literals': 0,
		'react-native/no-inline-styles': 0,
		'no-tabs': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/button-has-type': 'off',
		'no-use-before-define': 'off',
		'import/prefer-default-export': 'off',
		quotes: [2, 'single', { avoidEscape: true }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/jsx-props-no-spreading': 'off',
		'no-useless-escape': 0,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	overrides: [
		{
			files: ['**/*.d.ts'],
			rules: {
				'spaced-comment': 'off',
			},
		},
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
			},
		},
	],
};
