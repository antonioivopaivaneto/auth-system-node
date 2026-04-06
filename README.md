# 🔐 Sistema de Autenticação Seguro com Node.js

## 📌 Objetivo

Implementar um sistema de autenticação seguro com:

* Hash criptográfico (bcrypt)
* Autenticação JWT
* 2FA (duplo fator)
* Recuperação de senha com token temporário
* Conformidade com LGPD

---

## 🚀 Tecnologias

* Node.js
* Express
* Prisma ORM
* MySQL/PostgreSQL
* JWT
* Bcrypt
* Speakeasy (2FA)

---

## 📂 Estrutura do Projeto

Arquitetura modular inspirada em DDD:

* modules/auth → autenticação
* shared → utilidades e infra
* config → variáveis de ambiente

---

## 🔐 Segurança Implementada

* Hash com salt (bcrypt)
* Controle de tentativas de login
* Bloqueio de conta
* Tokens com expiração
* Autenticação em dois fatores (2FA)

---

## ⚖️ LGPD

O sistema atende aos princípios da LGPD:

* Minimização de dados
* Segurança
* Transparência
* Direito de exclusão

---

## ▶️ Como rodar

```bash
npm install
npm run dev
```

---

## 📊 Futuras melhorias

* Logs de auditoria
* Refresh token
* Rate limiting
* Monitoramento
