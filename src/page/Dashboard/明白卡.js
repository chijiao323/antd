
import { Button,Input } from 'antd';
export default () => {
    return <div>
    <table border="1" width="1200" >
  <tr>
  
    <th colspan="6" height="60"><center><div style={{ fontSize:40}}>云阳县扶贫攻坚明白卡 </div></center></th>
   
  </tr>
  <tr>
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 户主姓名</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /> </div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 人 口</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /> </div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 乡镇（街道）村组</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
    
  </tr>
  <tr>
     <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 家庭成员现状</div></center></th> 
    <th  colspan="5" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
  </tr>
  <tr>
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 帮扶责任人</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}>   <Input  style={{ height: 60,backgroundColor: '#F0F0F0',}}  /></div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 所属单位</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 责任人电话</div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',}}  /></div></center></th> 
  </tr>
  <tr>
  <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 贫困成因</div></center></th> 
    <th  colspan="5" height="60"><center><div style={{ fontSize:20}}> <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /> </div></center></th> 
  </tr>
  <tr>
  <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 脱贫需求</div></center></th> 
    <th  colspan="5" height="60"><center><div style={{ fontSize:20}}>   <Input  style={{ height: 60,backgroundColor: '#F0F0F0',}}  /></div></center></th> 
  </tr>
  <tr>
  <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 帮扶措施</div></center></th> 
    <th  colspan="5" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
  </tr>
  <tr>
  <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 评定年度</div></center></th> 
    <th colspan="2" width="16.6%" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
    <th  width="16.6%" height="60"><center><div style={{ fontSize:20}}> 脱贫年度</div></center></th> 
    <th   colspan="2" width="16.6%" height="60"><center><div style={{ fontSize:20}}>  <Input  style={{ height: 60,backgroundColor: '#F0F0F0',fontSize:20}}  /></div></center></th> 
     
  </tr>
</table>  
   <center ><Button style={{ height: 60,backgroundColor: '#C6E2FF',fontSize:20}} >修改</Button><Button style={{ height: 60,backgroundColor: '#A0522D',fontSize:20}} >保存</Button></center>
  </div>
}