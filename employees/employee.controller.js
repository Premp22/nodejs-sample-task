

exports.getEmployee = getEmployee;
exports.saveEmployee = saveEmployee;

function getEmployee(req,res){
 
  const id = req.params.id;
  

  const employee = {name:'prem',age:23};

  return res.json({employee:id})
}

function saveEmployee(req,res){
  let employees = [{name:'prem'},{name:'jane'}];
  const emp = req.body.emp;

  employees.push(emp);


  return res.json({employees});
}