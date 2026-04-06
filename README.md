# 🔐 Sistema de Autenticação Seguro com Node.js

---

## 📌 Visão Geral do Projeto

Este projeto tem como objetivo implementar um sistema de autenticação seguro utilizando Node.js, seguindo boas práticas de desenvolvimento, segurança da informação e conformidade com a LGPD.

O sistema contempla:

* Cadastro de usuários
* Login com autenticação JWT
* Hash de senha com salt
* Controle de tentativas de login
* Autenticação em dois fatores (2FA)
* Recuperação de senha com token temporário
* Registro de logs (auditoria)

---

## 🧠 Arquitetura do Projeto

O sistema segue uma arquitetura modular inspirada em DDD (Domain-Driven Design):

```
Route → Controller → Service → Repository → Database
```

### 📌 Camadas

* **Routes**: definem os endpoints da API
* **Controllers**: recebem requisições HTTP e retornam respostas
* **Services**: contém as regras de negócio
* **Repositories**: fazem acesso ao banco de dados
* **Utils**: funções auxiliares (hash, JWT, tokens)

---

## ⚙️ Tecnologias Utilizadas

### 🟢 Node.js

Ambiente de execução JavaScript no servidor.

* Permite criar APIs rápidas e escaláveis
* Baseado em eventos (event-driven)
* Muito utilizado para aplicações web modernas

---

### 🚀 Express

Framework minimalista para Node.js.

* Gerencia rotas (GET, POST, etc.)
* Facilita criação de APIs REST
* Middleware para tratar requisições

---

### 🔐 bcrypt

Biblioteca para criptografia de senhas.

* Gera hash seguro
* Aplica salt automaticamente
* Protege contra ataques de força bruta

---

### 🔑 jsonwebtoken (JWT)

Responsável pela autenticação via token.

* Gera tokens assinados
* Permite autenticação stateless
* Usado para manter sessão do usuário

---

### 🔒 dotenv

Gerencia variáveis de ambiente.

* Protege dados sensíveis (senha, chave JWT)
* Evita hardcode no código
* Facilita configuração por ambiente

---

### 🧠 Prisma ORM

ORM moderno para acesso ao banco de dados.

* Abstrai SQL
* Facilita queries
* Permite troca de banco (MySQL/Postgres)
* Gera client automático

---

### 📲 speakeasy

Biblioteca para autenticação em dois fatores (2FA).

* Gera códigos temporários (TOTP)
* Compatível com Google Authenticator
* Aumenta segurança do login

---

### 🧾 qrcode

Gera QR Code para configuração do 2FA.

* Usuário escaneia no app autenticador
* Integração com speakeasy

---

### 📧 nodemailer

Envio de e-mails.

* Usado para recuperação de senha
* Envio de tokens
* Notificações do sistema

---

### 🔄 nodemon

Ferramenta de desenvolvimento.

* Reinicia servidor automaticamente
* Aumenta produtividade

---

### 🔐 crypto (nativo do Node)

Geração de tokens seguros.

* Usado na recuperação de senha
* Gera valores aleatórios seguros

---

## 🔐 Segurança Implementada

### ✔ Hash de senha

* Uso de bcrypt com salt
* Senhas nunca são armazenadas em texto puro

### ✔ Autenticação JWT

* Tokens com expiração
* Assinatura segura

### ✔ Controle de tentativas

* Bloqueio após múltiplas falhas
* Prevenção contra brute force

### ✔ 2FA (Duplo Fator)

* Código temporário (TOTP)
* Camada extra de segurança

### ✔ Recuperação de senha

* Token único
* Expiração (ex: 15 minutos)
* Invalidação após uso

---

## 🔁 Fluxo de Autenticação

### 📌 Registro

1. Usuário envia email e senha
2. Senha é criptografada (bcrypt)
3. Usuário é salvo no banco

---

### 📌 Login

1. Usuário envia credenciais
2. Sistema valida senha
3. Gera token JWT
4. Retorna token

---

### 📌 2FA

1. Usuário escaneia QR Code
2. Gera código no app
3. Sistema valida código

---

### 📌 Recuperação de Senha

1. Usuário solicita recuperação
2. Sistema gera token
3. Envia por e-mail
4. Usuário redefine senha

---

## ⚖️ Conformidade com LGPD

O sistema foi desenvolvido respeitando os princípios da LGPD:

### ✔ Minimização de dados

Apenas dados necessários são armazenados.

### ✔ Segurança

* Criptografia de senha
* Tokens seguros
* Controle de acesso

### ✔ Transparência

Usuário pode:

* Consultar seus dados
* Solicitar exclusão

### ✔ Auditoria

Registro de ações críticas:

* Login
* Reset de senha
* Alterações

---

## 📊 Benefícios do Sistema

* Alta segurança
* Escalável
* Fácil manutenção
* Código organizado
* Pronto para produção

---

## 🚀 Conclusão

O projeto demonstra a implementação de um sistema de autenticação moderno, seguro e alinhado com as melhores práticas do mercado.

Além disso, atende aos requisitos técnicos e legais exigidos, sendo adequado tanto para aplicações reais quanto para fins acadêmicos.

---

## 📌 Autor

Antonio Ivo Paiva
