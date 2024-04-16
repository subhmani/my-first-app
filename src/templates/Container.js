import styles from './Container.module.css';
import '../Subscription/Subscription.css';
import styled from 'styled-components';
 const Container = (props) => {
    //const classes="styles.container"  + props.className
    return <div className={styles.container}>{props.children}</div>
}
/* const Container=styled.div`{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}
&:hover{border:red}
`;  */
export default Container