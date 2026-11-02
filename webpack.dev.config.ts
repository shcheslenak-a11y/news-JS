import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config';

export default merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
});
