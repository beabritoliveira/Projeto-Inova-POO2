-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
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
CREATE TABLE "AlunoGrupo" (
    "idAluno" TEXT NOT NULL,
    "idGrupo" TEXT NOT NULL,

    PRIMARY KEY ("idAluno", "idGrupo"),
    CONSTRAINT "AlunoGrupo_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlunoGrupo_idGrupo_fkey" FOREIGN KEY ("idGrupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "notaGeral" REAL,
    "dataHora" DATETIME NOT NULL,
    "lider_id" TEXT NOT NULL,
    CONSTRAINT "Grupo_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_grupo" TEXT NOT NULL,
    "dataHora" DATETIME NOT NULL,
    CONSTRAINT "Estande_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avaliador" TEXT NOT NULL,
    "nota" REAL NOT NULL,
    "id_grupo" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AlunoGrupo_idAluno_key" ON "AlunoGrupo"("idAluno");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_lider_id_key" ON "Grupo"("lider_id");
