import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';
import Usuario from './usuarios.js';

class Postagem extends Model {}

Postagem.init({
  id_postagem: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_postagem: {
    type: DataTypes.DATE,
    allowNull: false
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
  modelName: 'postagens',
  timestamps: false
});

Postagem.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Postagem, { foreignKey: 'id_usuario' });

export default Postagem;