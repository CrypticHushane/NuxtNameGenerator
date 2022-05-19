import {Gender} from '@/enums/Gender';
import {NameLength} from '@/enums/NameLength';
import {Popularity} from '@/enums/Popularity';

export default interface OptionsState {
    gender : Gender,
    popularity: Popularity,
    nameLength: NameLength
}