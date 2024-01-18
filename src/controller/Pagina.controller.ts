import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pagina } from "../entity/Pagina";

const appDataSource = AppDataSource;

class PaginController {

    getPagina = async (req: Request, res: Response) => {

        const rota = req.params[0];
        const dataAtualizacao = req.query.dataAtualizacao || null;

        const repoPAgina = appDataSource.getRepository('Pagina');

        const pagina = await repoPAgina.findOne({
            where: {
                rota: rota
            }
        })

        if (pagina) {
            if ((dataAtualizacao && pagina.dataAtualizacao > dataAtualizacao) || !dataAtualizacao) {
                return res.json(pagina);
            } else {
                return res.status(200).json({
                    message: 'Não modificado',
                    dataAtualizacao: pagina.dataAtualizacao,
                    conteudo: pagina.conteudo
                });
            }

        }

        const paginaNova = new Pagina();
        paginaNova.rota = rota;
        paginaNova.conteudo = '';
        paginaNova.dataAtualizacao = new Date();

        await repoPAgina.save(paginaNova);
        return res.json(paginaNova);

    }

    postPagina = async (req: Request, res: Response) => {

        const rota = req.params[0];

        const repoPAgina = appDataSource.getRepository('Pagina');

        const pagina = await repoPAgina.findOne({
            where: {
                rota: rota
            }
        })

        if (pagina) {
            pagina.conteudo = req.body.conteudo;
            pagina.dataAtualizacao = new Date();
            await repoPAgina.save(pagina);
            return res.json(pagina);
        }

        const paginaNova = new Pagina();
        paginaNova.rota = rota;
        paginaNova.conteudo = req.body.conteudo;
        paginaNova.dataAtualizacao = new Date();

        await repoPAgina.save(paginaNova);
        return res.json(paginaNova);

    }

}

export { PaginController }