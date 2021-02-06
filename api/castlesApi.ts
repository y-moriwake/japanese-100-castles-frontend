import Axios from 'axios';
import { CastleInfo } from '../interfaces/CastleInfo';

class CastlesApi {

    /**
     * 100名城をすべて取得します。
     */
    async getTop100(): Promise<CastleInfo[]> {
        const response = await Axios.get<CastleInfo[]>('top100/');
        return response.data;
    }

    /**
     * 国宝の城をすべて取得します。
     */
    async getNationalTreasure(): Promise<CastleInfo[]> {
        const response = await Axios.get<CastleInfo[]>('national-treasure/');
        return response.data;
    }

    /**
     * 現存の城をすべて取得します。
     */
    async getExistence(): Promise<CastleInfo[]> {
        const response = await Axios.get<CastleInfo[]>('existence/');
        return response.data;
    }
}

export const castlesApi = new CastlesApi();