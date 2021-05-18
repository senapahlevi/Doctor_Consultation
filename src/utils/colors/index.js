/* eslint-disable prettier/prettier */
/*
text,button :{} ini objek
maksud mainColors.green1 jadi 
misal gw mau ambil warna prmary nanti udah kepanggil
dari si maincolors karena lebih ciamik dan rapih
jadi colors buat diolah dari kumpulan warna mainColors
*/
const mainColors = {
    green1:'#0BCAD4',
    dark1:'#112340',
    dark2:'#495A75',
    grey1:'#7D8797',
    white1:'white',
    grey2:'#E9E9E9',
};

/*
inget didalem nilai objek gaboleh sama persis variable nya colors
ya harus beda makanya make mainColors
*/
export const colors = {
    primary:mainColors.green1,
    secondary:mainColors.dark1,
    white:'white',
    black:'black',
    border:
        mainColors.grey2,
        
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
        menuInactive:mainColors.dark2,
        menuActive:mainColors.green1
    },
    button:{
        primary:{
            background: mainColors.green1,
            text:mainColors.white1,
        },

        secondary:{
            background:mainColors.white1,
            text:mainColors.dark1,
        },
    },
   

};