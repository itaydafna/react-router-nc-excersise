/**
 * Created by itaydafna on 27/09/2016.
 */

export const Tab1 = (props) => {
    console.log(props.params);
    return (<div>
        <h2> Welcome to Tab <span>{props.params.val}</span></h2>

    </div>);
}