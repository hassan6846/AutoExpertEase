//required controllers

//create a listing for product //un approved
//fetch all listing (admin only)
//create listing (from admin)
//fetch all requests listing..
//update user role
//approve listing
//delete single listing
//update listing
//fetch by category 
//fetch by sub category
//fuzzy search
//Price and range filteration
//autocomplete search options
const CreateProductListing = async (req, res, next) => {
    const { name, brand, description, image, tags, category, subcategory, saleprice, beforePrice, stock } = req.body;

    //preventing Empty post to access data..
    if (!name || !brand || !description || !image || !tags || !category || !subcategory || !saleprice || !beforePrice || !stock) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields that are required "
        });
    }


    try {





    } catch (error) {

        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }


}


module.exports = { CreateProductListing }