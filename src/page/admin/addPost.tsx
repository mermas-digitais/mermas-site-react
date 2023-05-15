import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import { ModelPost } from '../../components/modal/modalPost';
// import { PostType } from '../../services/types';
// import useGet from '../../hooks/useGet';

export const AddPost = () => {
  // const postData = useGet<PostType>('getPost');

  return (
    <section className="relative w-full h-full flex p-8 flex-col gap-8">
      <ModelPost />
      <div className='flex flex-col gap-2'>
        {/* {postData.map((item) => {
          return ( */}
            <div className="bg-white rounded-xl w-72 h-28 flex ">
              <div className="w-[50%] h-full">
                {/* <img
                  className="object-cover rounded-l-xl w-full h-full"
                  src={item.PicturePost[0]}
                  alt=""
                /> */}
              </div>

              <div className="text-sm font-quicksand flex flex-col justify-between font-medium p-2 w-full">
                {/* <strong>{item.TitlePost}</strong>
                <p className="text-xs">
                  {item.DescriptionPost.substring(0, 52)}...
                </p>
                <i className="text-xs text-gray-300">{item.createPost}</i> */}
                <div>
                  <ul className="flex gap-2 text-base text-gray-300">
                    <li className="cursor-pointer hover:text-purple-700">
                      <TrashSimple />
                    </li>
                    <li className="cursor-pointer hover:text-purple-700">
                      <PencilSimple />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          {/* );
        })} */}
      </div>
    </section>
  );
};
