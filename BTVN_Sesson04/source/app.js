class ConNguoi {
    constructor(ten, tuoi, gioiTinh, diaChi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    hienThiThongTin() {
        switch (this.gioiTinh) {
            case 1:
                var gt = 'nam';
                break;
            case 2:
                var gt = 'nu';
                break;
            case 3:
                var gt = 'bê đê';
                break;
            default:
                var gt = '';
                break;
        }
        document.getElementById("tbody").innerHTML +=
            `<tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${gt}</td>
                <td>${this.diaChi}</td>   
            </tr>`;
    }
}
var cn1 = new ConNguoi('tú', 19, 1, 'nam dinh');
cn1.hienThiThongTin();
var cn2 = new ConNguoi('thiện', 19, 2, 'chương mỹ');
cn2.hienThiThongTin();
var cn3 = new ConNguoi('yến', 1, 2, 'sóc trăng');
cn3.hienThiThongTin();
var cn4 = new ConNguoi('hậu môn', 5, 3, 'sóc sơn');
cn4.hienThiThongTin();
