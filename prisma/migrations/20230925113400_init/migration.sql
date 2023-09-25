-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grupo_id" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lider_id" TEXT NOT NULL,
    "estande" TEXT NOT NULL,
    "notaGeral" REAL NOT NULL,
    "avaliacao" TEXT NOT NULL,
    "dataHora" DATETIME NOT NULL,
    CONSTRAINT "Grupo_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_estande_fkey" FOREIGN KEY ("estande") REFERENCES "Estande" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_avaliacao_fkey" FOREIGN KEY ("avaliacao") REFERENCES "Avaliacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataHora" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avaliador" TEXT NOT NULL,
    "nota" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_lider_id_key" ON "Grupo"("lider_id");
