fetch("https://mul14.github.io/data/employees.json")
.then((res)=>res.json())
.then((data)=>{
    let gaji=[];
    let jakarta=[];
    let maret=[];
    let department=[];
    let jumlah_bolos=0;
    let bolos=[];
    data.forEach((data, i)=>{
        if(data["salary"]>1500000){gaji.push(data["first_name"]);}
    });
    data.forEach((data, i)=>{
        if(data["addresses"][0]["city"]=="DKI Jakarta"){
            jakarta.push(data["first_name"]);
        }
    });
    data.forEach((data, i)=>{
        if(new Date(data["birthday"]).toString().slice(4,7)=="Mar"){
            maret.push(data["first_name"]);
        }else{maret[0]="tidak ada";}
    });
    data.forEach((data, i)=>{
        if(data.department.name=="Research and development"){
            department.push(data["first_name"]);
        }
    });
    data.forEach((data, i)=>{
        jumlah_bolos=0;
        data["presence_list"].forEach((data)=>{
            if(new Date(data).toString().slice(4,7)=="Oct"){
                jumlah_bolos=jumlah_bolos+1;
            }
        });
        jumlah_bolos=31-jumlah_bolos;
        bolos.push([data["first_name"], ", jumlah tidak hadir= "+jumlah_bolos.toString()]);
    });
    console.log('1. semua karyawan dengan gaji di atas Rp15.000.000');
    gaji.forEach((data)=>console.log(data));
    console.log('2. semua karyawan yang berdomisili di Jakarta');
    jakarta.forEach((data)=>console.log(data));
    console.log('3. semua karyawan yang ulang tahun pada bulan Maret');
    maret.forEach((data)=>console.log(data));
    console.log('4. semua karyawan yang berada di departemen Research and Development');
    department.forEach((data)=>console.log(data));
    console.log('5.  banyak jumlah hari tidak masuk dari setiap karyawan pada October 2019');
    bolos.forEach((data)=>console.log(data));
});