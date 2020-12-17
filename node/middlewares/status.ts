export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    // clients: { catalog },
    clients: { oms },
  } = ctx

  console.log('Received code:', code)

  // const data = await catalog.getSkuById(code.toString())
  const data = await oms.listOrders()

  ctx.body = data
  await next()
}
