

// Employee Table
Employee.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'role',
                key: 'id'
            }
        },
        manager_id: {
            type: DataTypes.INTEGER,
                references: {
                    model: 'employee',
                    key: 'id'
                }
        },
    },  
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);