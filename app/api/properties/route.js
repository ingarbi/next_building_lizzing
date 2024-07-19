export const GET = async (request) => {
  try {
    return new Response(JSON.stringify({ message: "Hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
