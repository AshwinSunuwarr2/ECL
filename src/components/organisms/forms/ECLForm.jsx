import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema
const schema = z.object({
  ead: z
    .string()
    .refine(val => val.trim() !== "", "EAD is required")
    .refine(val => /^[0-9]+$/.test(val), "Invalid number")
    .transform(val => parseFloat(val))
    .refine(val => !isNaN(val) && val > 0, "EAD must be a positive number"),
  
  pd: z
    .string()
    .refine(val => val.trim() !== "", "PD is required")
    .refine(val => /^[0-9]+$/.test(val), "Invalid number")
    .transform(val => parseFloat(val))
    .refine(val => !isNaN(val) && val >= 0 && val <= 100, "PD must be between 0 and 100"),
  
  lgd: z
    .string()
    .refine(val => val.trim() !== "", "LGD is required")
    .refine(val => /^[0-9]+$/.test(val), "Invalid number")
    .transform(val => parseFloat(val))
    .refine(val => !isNaN(val) && val >= 0 && val <= 100, "LGD must be between 0 and 100"),
});

const ECLCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const { ead, pd, lgd } = data;
    const ecl = (ead * (pd / 100) * (lgd / 100)).toFixed(2);
    alert(`Expected Credit Loss (ECL): $${ecl}`);
  };

  return (
    <div className="max-w-lg min-w-fit h-auto mx-auto p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-4">ECL Calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="ead">
            Exposure at Default (EAD):
          </label>
          <input
            type="text" // Change to text for better empty input handling
            id="ead"
            {...register("ead")}
            className="border rounded w-full p-2"
          />
          {errors.ead && <p className="text-danger text-sm">{errors.ead.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="pd">
            Probability of Default (PD):
          </label>
          <input
            type="text" // Change to text for better empty input handling
            id="pd"
            {...register("pd")}
            className="border rounded w-full p-2"
          />
          {errors.pd && <p className="text-danger text-sm">{errors.pd.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="lgd">
            Loss Given Default (LGD):
          </label>
          <input
            type="text" // Change to text for better empty input handling
            id="lgd"
            {...register("lgd")}
            className="border rounded w-full p-2"
          />
          {errors.lgd && <p className="text-danger text-sm">{errors.lgd.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Calculate ECL
        </button>
      </form>
    </div>
  );
};

export default ECLCalculator;


// ==================================================================================================

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// // Define the validation schema
// const schema = z.object({
//   ead: z.string().refine((val) => val.trim() !== "", {
//     message: "EAD is required",
//   }).transform((val) => parseFloat(val)).refine((val) => !isNaN(val) && val > 0, {
//     message: "EAD must be a positive number",
//   }),

//   pd: z.string().refine((val) => val.trim() !== "", {
//     message: "PD is required",
//   }).transform((val) => parseFloat(val)).refine((val) => !isNaN(val) && val >= 0 && val <= 100, {
//     message: "PD must be between 0 and 100",
//   }),

//   lgd: z.string().refine((val) => val.trim() !== "", {
//     message: "LGD is required",
//   }).transform((val) => parseFloat(val)).refine((val) => !isNaN(val) && val >= 0 && val <= 100, {
//     message: "LGD must be between 0 and 100",
//   }),
// });

// const ECLCalculator = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data) => {
//     const { ead, pd, lgd } = data;
//     const ecl = (ead * (pd / 100) * (lgd / 100)).toFixed(2);
//     alert(`Expected Credit Loss (ECL): $${ecl}`);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded shadow">
//       <h2 className="text-lg font-bold mb-4">ECL Calculator</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="ead">Exposure at Default (EAD):</label>
//           <input
//             type="text"  // Use text to allow for empty input
//             id="ead"
//             {...register("ead")}
//             className="border rounded w-full p-2"
//           />
//           {errors.ead && <p className="text-red-500">{errors.ead.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="pd">Probability of Default (PD):</label>
//           <input
//             type="text"  // Use text to allow for empty input
//             id="pd"
//             {...register("pd")}
//             className="border rounded w-full p-2"
//           />
//           {errors.pd && <p className="text-red-500">{errors.pd.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="lgd">Loss Given Default (LGD):</label>
//           <input
//             type="text"  // Use text to allow for empty input
//             id="lgd"
//             {...register("lgd")}
//             className="border rounded w-full p-2"
//           />
//           {errors.lgd && <p className="text-red-500">{errors.lgd.message}</p>}
//         </div>

//         <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Calculate ECL</button>
//       </form>
//     </div>
//   );
// };

// export default ECLCalculator;

// ==================================================================================================


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   ead: z.number().positive("EAD must be a positive number"),
//   pd: z.number().min(0, "PD must be a positive number").max(100, "PD must be less than or equal to 100"),
//   lgd: z.number().min(0, "LGD must be a positive number").max(100, "LGD must be less than or equal to 100"),
// });

// const ECLCalculator = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data) => {
//     const { ead, pd, lgd } = data;
//     const ecl = (ead * (pd / 100) * (lgd / 100)).toFixed(2);
//     alert(`Expected Credit Loss (ECL): $${ecl}`);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded shadow">
//       <h2 className="text-lg font-bold mb-4">ECL Calculator</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="ead">Exposure at Default (EAD):</label>
//           <input
//             type="number"
//             id="ead"
//             {...register("ead", { valueAsNumber: true })}
//             className="border rounded w-full p-2"
//           />
//           {errors.ead && <p className="text-red-500">{errors.ead.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="pd">Probability of Default (PD):</label>
//           <input
//             type="number"
//             id="pd"
//             {...register("pd", { valueAsNumber: true })}
//             className="border rounded w-full p-2"
//           />
//           {errors.pd && <p className="text-red-500">{errors.pd.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2" htmlFor="lgd">Loss Given Default (LGD):</label>
//           <input
//             type="number"
//             id="lgd"
//             {...register("lgd", { valueAsNumber: true })}
//             className="border rounded w-full p-2"
//           />
//           {errors.lgd && <p className="text-red-500">{errors.lgd.message}</p>}
//         </div>

//         <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Calculate ECL</button>
//       </form>
//     </div>
//   );
// };

// export default ECLCalculator;