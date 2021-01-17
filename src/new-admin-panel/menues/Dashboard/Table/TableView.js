import React , { Component } from 'react'
import './TableView.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class TableView extends Component{
    render()
    {
        return(
            <div className={"TableView"} >

            <table border="0" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Complete Percentange</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'}/></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    <tr>
                        <td>Imran Chowdhury</td>
                        <td>imran.cuet.cse17@gmail.com</td>
                        <td>Research Methodology</td>
                        <td><CircularProgressbar value={50} text={`${50}%`} className={'size'} /></td>
                    </tr>
                    
                </tbody>
            </table>
              
            </div>
        )
    }
}

export default TableView