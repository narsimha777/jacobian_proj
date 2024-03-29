const { derivative } = require('mathjs');

const jac = {
    getdisp(numofnodes){ 
       let u = "(N1)*u1"; 
       let v = "(N1)*v1";
       for(let i=1;i<numofnodes;i++){
        u+=` + (N${i+1})*u${i+1}`;
        v+=` + (N${i+1})*v${i+1}`;
       } 
       return {u, v };
    },
    getShapefun(n, Z, numofnodes){
        let Neqs = [];
        for(let i=0; i<numofnodes; i++){
            let currZ = Z[i];
            let currn = n[i];
            let currN = "1";
            let currden = 1;
            let valn = [];
            let valZ = [];
            for(let j=0; j<numofnodes; j++){
                if(n[j]!==currn&&(!valn.includes(n[j]))){
                    valn.push(n[j]);
                    currden *= currn - n[j];
                    currN += `*(n - (${n[j]}))`;
                }
                if(Z[j]!==currZ&&(!valZ.includes(Z[j]))){
                    valZ.push(Z[j]);
                    currden *= currZ - Z[j];
                    currN += `*(Z - (${Z[j]}))`;
                }
            }
            currN +=`/${currden}`;
            Neqs.push(currN);
        }
        return Neqs;
    }, 
    getfindisp(n, Z, numofnodes){
        let Neqs = this.getShapefun(n, Z, numofnodes);
        let dispeqs = this.getdisp(numofnodes);
        let finu = dispeqs.u;
        let finv = dispeqs.v;
        Neqs.forEach((item, index)=>{
            finu = finu.replace(`N${index+1}`, item);
            finv = finv.replace(`N${index+1}`, item);
        })
        return {finu, finv};
    },
    getjac(n, Z, numofnodes){
        let findispeqs = this.getfindisp(n, Z, numofnodes);
        let finu = findispeqs.finu;
        let finv = findispeqs.finv;
        let j11 = derivative(finu, 'Z', {simplify: true});
        let j12 = derivative(finu, 'n', {simplify: true});
        let j21 = derivative(finv, 'Z', {simplify: true});
        let j22 = derivative(finv, 'n', {simplify: true});
        j11 = j11.toString();
        j12 = j12.toString();
        j21 = j21.toString();
        j22 = j22.toString();
        return [[j11, j12], [j21, j22]];
    }
}
// console.log(jac.getdisp(5));
// console.log(jac.getZn(5));
// console.log(jac.getZn(4));
// console.log(jac.getShapefun([1, 2, 3], [1, 2, 3], 3))
// console.log(jac.getfindisp([-1, 1, 1, -1], [1, 1, -1, -1], 4))
// console.log(jac.getjac([-1, 1, 1, -1], [1, 1, -1, -1], 4))
// jac.getShapefun([-1, 1, 1, -1], [1, 1, -1, -1], 4)
module.exports = jac;
