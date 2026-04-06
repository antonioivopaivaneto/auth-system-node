const hash = require('../../../shared/utils/hash');
const logger = require("../../../shared/logger");
const UserRepository = require("../repositories/UserRepository");
const jwt = require("../../../shared/utils/jwt");



class AuthService{

    async register(email, password){
        const userExists = await UserRepository.findByEmail(email);
        if(userExists){
            throw new Error('Email já registrado');
        }
        const hashedPassword = await hash.hashPassword(password);
        const user = await UserRepository.create({ email, password: hashedPassword });
         
        return {
      message: 'Usuário criado com sucesso',
      user,
    };
    }   

    async login(email, password){
        const user = await UserRepository.findByEmail(email);
        if(!user){
            logger.warn(`Login falhou para email: ${email} - usuário não encontrado`);
            throw new Error('Usuário não encontrado');
        }

        const isPasswordValid = await hash.comparePassword(password, user.password);
        if(!isPasswordValid){
            logger.warn(`Login falhou para email: ${email} - senha incorreta`);
            throw new Error('Senha incorreta');
        }
        const token = jwt.generateJWT({ userId: user.id });
        return {
      message: 'Login realizado',
      token,
    };
    }
}

module.exports = new AuthService;