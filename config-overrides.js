/**
 * @file webpack 自定义配置
 * @author xlj1@meitu.com
 * @desc 不使用 package.json 的 "eject" 命令导出配置，使用 "react-app-rewired" 配置，配合 "customize-cra" 来简化配置
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
 	addLessLoader({
	   javascriptEnabled: true,
	   modifyVars: { '@primary-color': '#E92076' },
	}),
);
