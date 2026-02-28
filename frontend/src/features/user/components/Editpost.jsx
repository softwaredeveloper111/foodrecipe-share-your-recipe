import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { useForm, useFieldArray  } from "react-hook-form";
import { toast } from "react-toastify";
import useUser from "../hooks/useUser";
import Loading from "../../shared/Loading";


const categories = [
  "Lunch", "Dinner", "Breakfast", "Snack",
  "Dessert", "Side Dish", "Appetizer", "Beverage",
];
const toId = (cat) => cat.toLowerCase().replace(" ", "-");

const Editpost = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { loading, singleRecipe, HandlegetSingleRecipe , handleUpdateUserRecipe } = useUser();

  const [singleIngredient, setSingleIngredient] = useState("");
  const [singleInstruction, setSingleInstruction] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      servings: "",
      preptime: "",
      cooktime: "",
      description: "",
      image: null,
      category: [],
      ingredients: [],
      instructions: [],
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({ control, name: "ingredients" });

  const {
    fields: instructionFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({ control, name: "instructions" });

  // ── Fetch recipe on mount ────────────────────────────────────
  useEffect(() => {
    HandlegetSingleRecipe(id);
  }, [id]);

  // ── Prefill form once singleRecipe loads ─────────────────────
  useEffect(() => {
    if (!singleRecipe) return;

    reset({
      name: singleRecipe.name || "",
      servings: singleRecipe.servings || "",
      preptime: singleRecipe.prepTimeMinutes || "",
      cooktime: singleRecipe.cookTimeMinutes || "",
      description: singleRecipe.description || "",
      image: null, // file input can't be prefilled
      category: singleRecipe.mealType || [],
      ingredients: (singleRecipe.ingredients || []).map((val) => ({ value: val })),
      instructions: (singleRecipe.instructions || []).map((val) => ({ value: val })),
    });

    // Show existing image as preview
    if (singleRecipe.image) {
      setPreviewUrl(singleRecipe.image);
    }
  }, [singleRecipe]);

  // Watch new image upload for live preview
  const watchedImage = watch("image");
  useEffect(() => {
    if (watchedImage && watchedImage[0]) {
      setPreviewUrl(URL.createObjectURL(watchedImage[0]));
    }
  }, [watchedImage]);

  // ── Handlers ─────────────────────────────────────────────────
  function addIngredient() {
    if (singleIngredient.trim().length >= 2) {
      appendIngredient({ value: singleIngredient.trim() });
      setSingleIngredient("");
    }
  }

  function addInstruction() {
    if (singleInstruction.trim().length >= 2) {
      appendInstruction({ value: singleInstruction.trim() });
      setSingleInstruction("");
    }
  }

  async function submitHandler(data) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("ingredients", JSON.stringify(data.ingredients.map((i) => i.value)));
    formData.append("instructions", JSON.stringify(data.instructions.map((i) => i.value)));
    formData.append("prepTimeMinutes", Number(data.preptime));
    formData.append("cookTimeMinutes", Number(data.cooktime));
    formData.append("servings", Number(data.servings));
    formData.append("mealType", JSON.stringify(data.category));

    // Only append new image if user selected one
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    // 👇 Replace this with your actual update API call
     await handleUpdateUserRecipe(id,formData)
     navigate(-1)

    toast.success("Recipe updated successfully!");
  }

  // ── Loading state ─────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center text-white">
          <Loading/>
      </div>
    );
  }

  // ── UI ────────────────────────────────────────────────────────
  return (
    <div className="create-recipes p-10 min-h-screen bg-gray-200 rounded-2xl text-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-orange-400">Edit Recipe</h1>

      <form
        className="flex flex-col gap-10 w-120"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* Recipe Title */}
        <div className="flex flex-col gap-1">
          <input
            {...register("name", {
              required: "Recipe title is required",
              minLength: { value: 5, message: "Minimum 5 characters required" },
              maxLength: { value: 100, message: "Maximum 100 characters allowed" },
            })}
            className="border-b border-white outline-0 py-3 px-2 bg-transparent"
            type="text"
            placeholder="Recipe title goes here"
          />
          {errors.name && <small className="text-sm text-red-500">{errors.name.message}</small>}
        </div>

        {/* Servings */}
        <div className="flex flex-col gap-1">
          <input
            {...register("servings", {
              required: "Servings is required",
              min: { value: 1, message: "Minimum 1 person to serve" },
              max: { value: 100, message: "Maximum 100 people to serve" },
            })}
            className="border-b border-white outline-0 py-3 px-2 bg-transparent"
            type="number"
            placeholder="Number of serving people"
          />
          {errors.servings && <small className="text-sm text-red-500">{errors.servings.message}</small>}
        </div>

        {/* Prep Time */}
        <div className="flex flex-col gap-1">
          <input
            {...register("preptime", {
              required: "Preparation time is required",
              min: { value: 1, message: "Minimum 1 minute required" },
              max: { value: 200, message: "Maximum 200 minutes allowed" },
            })}
            className="border-b border-white outline-0 py-3 px-2 bg-transparent"
            type="number"
            placeholder="Preparation time in minutes"
          />
          {errors.preptime && <small className="text-sm text-red-500">{errors.preptime.message}</small>}
        </div>

        {/* Cook Time */}
        <div className="flex flex-col gap-1">
          <input
            {...register("cooktime", {
              required: "Cook time is required",
              min: { value: 1, message: "Minimum 1 minute required" },
              max: { value: 200, message: "Maximum 200 minutes allowed" },
            })}
            className="border-b border-white outline-0 py-3 px-2 bg-transparent"
            type="number"
            placeholder="Cook time in minutes"
          />
          {errors.cooktime && <small className="text-sm text-red-500">{errors.cooktime.message}</small>}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <input
            {...register("description", {
              required: "Description is required",
              minLength: { value: 15, message: "Minimum 15 characters required" },
              maxLength: { value: 200, message: "Maximum 200 characters allowed" },
            })}
            className="border-b border-white outline-0 py-3 px-2 bg-transparent"
            type="text"
            placeholder="Short recipe description"
          />
          {errors.description && <small className="text-sm text-red-500">{errors.description.message}</small>}
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="image-upload"
            className={`relative flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200
              ${previewUrl
                ? "border-orange-400 overflow-hidden p-0"
                : "border-gray-500 bg-gray-800 hover:border-orange-400 hover:bg-gray-700"
              }`}
          >
            {previewUrl ? (
              <>
                <img
                  src={previewUrl}
                  alt="Recipe preview"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center gap-1">
                  <i className="ri-image-edit-line text-3xl text-white" />
                  <span className="text-sm text-white font-medium">Change Image</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-400 pointer-events-none">
                <i className="ri-image-add-line text-4xl" />
                <span className="text-sm font-medium">Click to upload recipe image</span>
                <span className="text-xs text-gray-500">PNG, JPG, WEBP — max 5MB</span>
              </div>
            )}

            <input
              {...register("image", {
                validate: {
                  fileSize: (files) =>
                    !files?.[0] || files[0].size <= 5 * 1024 * 1024 || "Image must be under 5MB",
                  fileType: (files) =>
                    !files?.[0] ||
                    ["image/jpeg", "image/png", "image/webp"].includes(files[0].type) ||
                    "Only JPG, PNG, WEBP files allowed",
                },
              })}
              id="image-upload"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
            />
          </label>
          {errors.image && <small className="text-sm text-red-500">{errors.image.message}</small>}
        </div>

        {/* Ingredients */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <input
              value={singleIngredient}
              onChange={(e) => setSingleIngredient(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addIngredient())}
              className="grow border-b border-white outline-0 py-3 px-2 bg-transparent"
              type="text"
              placeholder="Add an ingredient"
            />
            <button
              onClick={addIngredient}
              type="button"
              className="text-white bg-gray-500 text-sm rounded-sm cursor-pointer font-semibold px-3 py-2"
            >
              Add
            </button>
          </div>

          <div className="mt-1 flex flex-wrap gap-3">
            {ingredientFields.map((field, index) => (
              <div
                key={field.id}
                className="px-3 py-2 rounded-md bg-white text-gray-900 font-normal text-sm flex gap-2 max-w-50"
              >
                {field.value}
                <i className="ri-close-line cursor-pointer font-normal" onClick={() => removeIngredient(index)} />
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <input
              value={singleInstruction}
              onChange={(e) => setSingleInstruction(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addInstruction())}
              className="grow border-b border-white outline-0 py-3 px-2 bg-transparent"
              type="text"
              placeholder="Add an instruction step"
            />
            <button
              onClick={addInstruction}
              type="button"
              className="text-white bg-gray-600 text-sm rounded-sm cursor-pointer font-semibold px-3 py-2"
            >
              Add
            </button>
          </div>

          <div className="mt-1 w-full flex flex-col gap-3">
            {instructionFields.map((field, index) => (
              <div
                key={field.id}
                className="px-3 py-2 w-full rounded-md bg-white text-gray-900 font-normal text-sm flex gap-2 justify-between"
              >
                <span>
                  <span className="font-semibold mr-2">{index + 1}.</span>
                  {field.value}
                </span>
                <i className="ri-close-line cursor-pointer font-normal" onClick={() => removeInstruction(index)} />
              </div>
            ))}
          </div>
        </div>

        {/* Category Checkboxes */}
        <div className="flex flex-col gap-1">
          <div className="category flex gap-4 items-center">
            <span>Category:</span>
            <div className="outline-0 bg-gray-600 grow p-2 rounded-md flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center gap-1">
                  <input
                    {...register("category", {
                      validate: (value) =>
                        value.length >= 1 || "Please select at least one category",
                    })}
                    value={cat}
                    className="cursor-pointer"
                    type="checkbox"
                    id={toId(cat)}
                  />
                  <label className="cursor-pointer hover:text-orange-400" htmlFor={toId(cat)}>
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {errors.category && <small className="text-sm text-red-500">{errors.category.message}</small>}
        </div>

        <button
          type="submit"
          className="px-3 py-2 bg-orange-500 hover:bg-orange-600 transition-colors rounded-md cursor-pointer w-fit mt-15 font-semibold"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default Editpost;