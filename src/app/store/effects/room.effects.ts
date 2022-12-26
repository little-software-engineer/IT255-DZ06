import { Injectable } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EnumRoomAction, GetRooms, GetRoomsSuccess } from "../actions/room.action";
import { of } from "rxjs";
import { Room } from "src/app/interfaces/room";
import { switchMap } from "rxjs/operators";


@Injectable()
export class RoomEffect {
    constructor(private _actions$: Actions, private _roomService: DataService) {

    }


    getRooms$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetRooms>(EnumRoomAction.GetRooms),
            switchMap(() => this._roomService.getRooms()),
            switchMap((roomHttp: Room[]) => {
                return of(new GetRoomsSuccess(roomHttp))
            })
        )
    )
}
