
//User must be authenticated to use this request 


const UpdateImg = async (phone:number,image:any) => {
    try {


        const response = fetch("/api/avatar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            })

        })


    } catch (error) {
        console.log();

    }


}
export default UpdateImg