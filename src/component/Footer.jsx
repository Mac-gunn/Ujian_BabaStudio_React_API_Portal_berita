import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { directive } from '@babel/types';
class Grid extends Component{

    render(){
        return(
            <div className="container-footer">
                <div className="row-footer">
                
                        Created by Gunn                    
                </div>
            </div>
        );
    }
}

    export default Grid;