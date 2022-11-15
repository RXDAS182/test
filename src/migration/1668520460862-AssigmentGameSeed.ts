import {MigrationInterface, QueryRunner} from "typeorm";

export class AssigmentGameSeed1668520460862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO assignment_games_game("assignmentId", "gameId") VALUES (2, 1), (2, 2), (3, 3), (5, 5)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM assignment_games_game");
    }

}
