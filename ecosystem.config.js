module.exports = {
    apps: [{
      name: 'netgar_backend',
      script: 'src/index.js',
      watch: true, // Opcional: activa la vigilancia del archivo para reiniciar automáticamente en cambios
      ignore_watch: ['node_modules'], // Opcional: excluye carpetas específicas de la vigilancia
    }],
  };