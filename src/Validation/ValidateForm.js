const validate = (form) => {
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
  const regexURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const regexNumber = /^[0-9]+$/;

  let errors = {};

  // NAME
  errors.name = !form.name
    ? "Name is required"
    : !regexName.test(form.name)
    ? "The name can only contain letters and spaces"
    : form.name.length > 50
    ? "The name must be less than 50 characters "
    : "";

  console.log(errors.name);

  // IMAGE
  errors.image = !form.image
    ? "Image is required"
    : !regexURL.test(form.image)
    ? "The URL entered is not correct"
    : "";

  // MIN-HEIGHT
  errors.minHeight = !form.minHeight
    ? "Min height is required"
    : !regexNumber.test(form.minHeight)
    ? "The height must be a number"
    : form.minHeight <= 0 || form.minHeight >= form.maxHeight
    ? "The minimum height cannot be less than 0 or greater than the maximum height"
    : form.minHeight > 100
    ? "The height cannot exceed 100 centimeters"
    : "";

  // MAX-HEIGHT
  errors.maxHeight = !form.maxHeight
    ? "Max height is required"
    : !regexNumber.test(form.maxHeight)
    ? "The height must be a number"
    : form.maxHeight <= 0 || form.minHeight >= form.maxHeight
    ? "The maximum height cannot be less than 0 or less than the minimum height"
    : form.maxHeight > 100
    ? "The height cannot exceed 100 centimeters"
    : "";

  // MIN-WEIGHT
  errors.minWeight = !form.minWeight
    ? "Min weight is required"
    : !regexNumber.test(form.minWeight)
    ? "The weight must be a number"
    : form.minWeight <= 0 || form.minWeight >= form.maxWeight
    ? "The minimum weight cannot be less than 0 or greater than the maximum weight"
    : form.minWeight > 100
    ? "The weight cannot exceed 100 kilograms"
    : "";

  // MAX-WEIGHT
  errors.maxWeight = !form.maxWeight
    ? "Max weight is required"
    : !regexNumber.test(form.maxWeight)
    ? "The weight must be a number"
    : form.maxWeight <= 0 || form.minWeight >= form.maxWeight
    ? "The maximum weight cannot be less than 0 or less than the minimum weight"
    : form.maxWeight > 100
    ? "The weight cannot exceed 100 kilograms"
    : "";

  // MIN-LIFE SPAN
  errors.minLifeSpan = !form.minLifeSpan
    ? "Min life span is required"
    : !regexNumber.test(form.minLifeSpan)
    ? "The Life span must be a number"
    : form.minLifeSpan <= 0 || form.minLifeSpan >= form.maxLifeSpan
    ? "The minimum life span cannot be less than 0 or greater than the maximum life span"
    : form.minLifeSpan > 20
    ? "The life span cannot exceed 20 years"
    : "";

  // MAX LIFE SPAN
  errors.maxLifeSpan = !form.maxLifeSpan
    ? "Max life span is required"
    : !regexNumber.test(form.maxLifeSpan)
    ? "The Life span must be a number"
    : form.maxLifeSpan <= 0 || form.minLifeSpan >= form.maxLifeSpan
    ? "The maximum life span cannot be less than 0 or less than the minimum life span"
    : form.minLifeSpan > 20
    ? "The life span cannot exceed 20 years"
    : "";

  //BREED GROUP
  errors.breed_group = !regexName.test(form.breed_group)
    ? "The breed group can only contain letters and spaces"
    : "";

  // TEMPERAMENTS
  if (!form.temperaments.length) {
    errors.temperaments = "The breed must have at least one temperament";
  } else {
    errors.temperaments = "";
  }

  return errors;
};

export default validate;
