import { SET_IMAGES, SET_IMAGES_LOADING } from './actionTypes';
import { fetchImages } from '../../externalServices/imageRetriever';
import { generateRandomNumbers } from '../../utils/randomNumbers';

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: images,
});

export const setImagesLoading = (isLoading = true) => ({
  type: SET_IMAGES_LOADING,
  payload: isLoading,
});

export const getImages = () => {
  return async (dispatch, getState) => {
    const { loading } = getState();

    if (loading) {
      return;
    }

    try {
      dispatch(setImagesLoading(true));
      const { data: allImages } = await fetchImages();

      const randomNumbers = generateRandomNumbers(0, allImages.length, 5);

      const images = [];
      for (let num of randomNumbers) images.push(allImages[num]);

      dispatch(setImages(images));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setImagesLoading(false));
    }
  };
};
