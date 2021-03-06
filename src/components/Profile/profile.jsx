import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import profile from 'assets/images/panda.jpg';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';

const style = {
    toolbar : {
        width : '97%' ,
        height : '50px' ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    } ,
    back_button : {
        marginRight : '5px' ,
    } ,
    title : {
        marginLeft : '20px' ,
    } ,
    line1 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '23%'
    } ,
    line2 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '60%'
    } ,
    line3 : {
        position : 'absolute' ,
        left : '16%' ,
    } ,
    text_leftside : {
        position : 'absolute',
        top : '15%' ,
        left : '3%' ,
        color : '#D0D0D0'
    } ,
    text_title : {
        position : 'absolute',
        top : '14%' ,
        left : '20%' ,
    } ,
    form : {
        position : 'absolute',
        top : '25%' ,
        left : '25%' ,
    } ,
    text_area : {
        width : '400px' ,
        height : '250px'
    } ,
    img : {
        width : '200px' ,
        height : '250px'
    } ,
    awesomeicon : {
        marginLeft : '10px' ,
        fontSize : '25px' ,
        color : 'fff'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        left : "72%"
    }
}

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function Profilepage() {
    const classes = useStyles();
    const [value, setValue] = React.useState('male');

    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={style.toolbar}>
                    <Button
                        edge="start"
                        style={style.back_button}
                        color="inherit"
                        display="none"
                        // onClick={}
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={style.awesomeicon} />
                        <Typography variant="h6" style={style.title}>
                            返 回 首 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Typography variant="h5" style={style.text_leftside}>
                    <Box lineHeight="normal" m={1}>
                        王熊貓
                    </Box>
                    <Box lineHeight={1} m={4} style={{color : "#000000"}}>
                        個人檔案
                    </Box>
                    <Box lineHeight={1} m={4}>
                        訓練人臉
                    </Box>
                    <Box lineHeight={1} m={4}>
                        報名狀況
                    </Box>
                    <Box lineHeight={3} m={1}>
                        主辦單位名稱
                    </Box>
                    <Box lineHeight={1} m={4}>
                        主辦單位資訊
                    </Box>
                    <Box lineHeight={1} m={4}>
                        管理活動
                    </Box>
                    <Box lineHeight={3} m={1}>
                        我的相簿
                    </Box>
                </Typography>
                <div style={style.line1}>
                    <hr width="1" size="145" color="#6C6C6C" />
                </div>
                <div style={style.line2}>
                    <hr width="1" size="85" color="#6C6C6C" />
                </div>
                <div style={style.line3}>
                    <hr width="1" size="1220" color="#E0E0E0" />
                </div>
            </div>
            <div>
                <Typography variant="h4" style={style.text_title}>
                    個 人 檔 案
                    <hr width="800" />
                </Typography>
                <form style={style.form}>
                    <Box lineHeight="normal" m={1}>
                        <img src={profile} style={style.img} alt="img" />
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label >
                            姓名： &nbsp;
                            <TextField label="Name" placeholder="王小明" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            電子郵件：&nbsp;
                            <TextField label="E-mail" placeholder="aaa12345@gmail.com" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            手機：&nbsp;
                            <TextField label="Cellphone" placeholder="0919478653" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                            <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
                            <label>
                                性別：&nbsp;
                                <FormControlLabel value="male" control={<Radio color="" />} label="男性"/>
                                <FormControlLabel value="female" control={<Radio color="" />} label="女性" />
                                <FormControlLabel value="other" control={<Radio color="" />} label="暫不透漏" />
                            </label>
                            </RadioGroup>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            生日：&nbsp;
                            <TextField label="Birthday" type="date" defaultValue="1999-03-25" InputLabelProps={{shrink: true,}} />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            身分證字號：&nbsp;
                        </label>
                        <input type="text" name="ID" disabled placeholder="A123456789" />
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            個人介紹：
                        </label>
                    </Box>
                    <Box lineHeight="normal" m={1}>
                        <TextareaAutosize aria-label="maximum height" style={style.text_area} placeholder="請介紹你自己..." />
                    </Box>
                    <Box lineHeight={5} m={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={style.button}
                            startIcon={<SaveIcon />}
                        >
                            儲存更新
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    );
  }
