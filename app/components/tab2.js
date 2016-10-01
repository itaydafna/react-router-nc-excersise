/**
 * Created by itaydafna on 27/09/2016.
 */
export const Tab2 = (props) =>{
   return (<div>
    <h2> Welcome to Tab 2</h2>
       <p>{props.location.query.text}</p>
       
    </div>);
}