import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';
import Usuario from './usuarios.js';
import Postagem from './postagem.js';

class Comentario extends Model {}

Comentario.init({
  id_comentario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  texto_comentario: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  data_comentario: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  id_postagem: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Postagem,
      key: 'id_postagem'
    }
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  }
}, {
  sequelize,
  modelName: 'comentarios',
  timestamps: false
});

Comentario.belongsTo(Postagem, { foreignKey: 'id_postagem' });
Comentario.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Postagem.hasMany(Comentario, { foreignKey: 'id_postagem' });
Usuario.hasMany(Comentario, { foreignKey: 'id_usuario' });

export default Comentario;