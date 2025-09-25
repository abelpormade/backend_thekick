import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Usuario extends Model {}

Usuario.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_usuario: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  nascimento_usuario: {
    type: DataTypes.DATE,
    allowNull: false
  },
  telefone_usuario: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  email_usuario: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
   pais_usuario: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  senha_usuario: {
  type: DataTypes.STRING(255),
  allowNull: false
}
}, {
  sequelize,
  modelName: 'usuarios',
  tableName: 'usuarios',   // garante o nome da tabela exato
  freezeTableName: true,
  timestamps: false
});

export default Usuario;