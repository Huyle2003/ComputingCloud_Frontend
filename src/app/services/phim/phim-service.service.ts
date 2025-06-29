import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhim } from '../../model/phim/IPhim';
import { IGhe } from '../../model/phim/IGhe';
import { IPhong } from '../../model/phim/IPhong';
import { ILichChieu } from '../../model/phim/ILichChieu';

@Injectable({
  providedIn: 'root'
})
export class PhimServiceService {

  private apiUrlPhong = 'https://computingcloud-backend.onrender.com/api/phong';
  private apiUrlGhe = 'https://computingcloud-backend.onrender.com/api/ghe';
  private apiUrlPhim = 'https://computingcloud-backend.onrender.com/api/phim';
  private apiUrlLichchieu = 'https://computingcloud-backend.onrender.com/api/lichchieu';


  constructor(private http: HttpClient) { }

  // Lấy tất cả các phim
  getAllPhim(): Observable<IPhim[]> {
    return this.http.get<IPhim[]>(this.apiUrlPhim);
  }

  getPhimById(id: number): Observable<IPhim> {
    return this.http.get<IPhim>(`http://localhost:8080/api/phim/${id}`);
  }

  getGheList(): Observable<IGhe[]> {
    return this.http.get<IGhe[]>(this.apiUrlGhe);
  }

  getPhongList(): Observable<IPhong[]> {
    return this.http.get<IPhong[]>(this.apiUrlPhong);
  }

  getLichChieuList(): Observable<ILichChieu[]> {
    return this.http.get<ILichChieu[]>(this.apiUrlLichchieu);
  }

  getLichChieuByMaPhim(id: Number): Observable<ILichChieu[]> {
    return this.http.get<ILichChieu[]>(`${this.apiUrlLichchieu}/${id}`);
  }
}
