use master
go
IF NOT EXISTS(SELECT name FROM master.dbo.sysdatabases WHERE NAME = 'CONTABILIDAD')
CREATE DATABASE CONTABILIDAD

GO 

USE CONTABILIDAD

GO

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'TIPODECUENTA')
create table TIPODECUENTA(
codigo int primary key identity(1,1),
nombre varchar(60),
)

go

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'CUENTA')
create table CUENTA(
codigo int primary key identity(1,1),
nombre varchar(60),
tipoDeCuenta varchar(60),
)

go

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'COMPROBANTE')
create table COMPROBANTE(
codigo int primary key identity(1,1),
numero int,
fecha date,
observaciones varchar(60),
cuenta varchar(60),
debe float,
haber float,
)

go