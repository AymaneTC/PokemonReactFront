module.exports = {
    entry: './src/main.tsx', // Adjust the entry point based on your project structure
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png)$/,
          type: 'assets/images'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', 'tsx', '.js', 'jsx']
    },
  };