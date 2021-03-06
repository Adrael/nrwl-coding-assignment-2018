import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface IState {
    router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<IState> = {
    router: fromRouter.routerReducer
};
