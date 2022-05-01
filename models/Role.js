

// Role Table
Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dept',
                key: 'id'
            }
        },
    }, 
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'role'
    }
);