// singleton
import knex from 'knex';
import knexConfig from '../config/database.js';

let conn; // Declara uma variável para armazenar a conexão

const knexService = () => {
  if (!conn) { // Se a conexão ainda não existir
    conn = knex(knexConfig); // Cria uma nova conexão usando a configuração do Knex
  }
  return conn; // Retorna a conexão
}

export default knexService();
