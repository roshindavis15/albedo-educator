import db from '../models/index.js'; 
const { Student } = db;
const {Teacher}=db;
const {Mentor}=db;


export const addStudent = async (studentData) => {
    return await Student.create(studentData);
};


export const updateStudent=async(studentId,updateData)=>{
    try {
        const [updated]=await Student.update(updateData,{
            where:{id:studentId}
        });
        if(!updated){
            throw new Error('Student not found or no changes made');
        }

        const updatedStudent=await Student.findOne({where:{id:studentId}});

        return updatedStudent;
    } catch (error) {
        throw error
    }
}


export const removeStudent=async(studentId)=>{
 try {
    const deletedCount=await Student.destroy({
        where:{id:studentId}
    });
    return deletedCount>0;
 } catch (error) {
    throw error;
 }
};

export const getStudentsDataFunc=async()=>{
    try {
        const studentsData=await Student.findAll({
            attributes:['id','name','email','phoneNumber','whatsappNumber','parentName','parentOccupation'],
            include:[
                {
                    model:Teacher,
                    as:'teachers',
                    attributes:['name'],
                    through:{attributes:[]}
                },
                {
                    model:Mentor,
                    as:'mentors',
                    attributes:['name'],
                    through:{attributes:[]}
                }

            ]
        });
        return studentsData
    } catch (error) {
        throw error;
    }
}