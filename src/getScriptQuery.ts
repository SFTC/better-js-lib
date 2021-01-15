/**
 * 从 npm 启动命令中获取指定参数
 * 比如从 npm run dev --proxy=mock 得到 proxy 的值为 mock
 * @param field 要获取的参数名
 * @returns 返回的参数值，没有则返回 null
 */
const getScriptQuery = (field: string, defaultValue: string | null = null ): string | null => {
  // 启动命令拆分对象
  const argv = JSON.parse(process.env.npm_config_argv || '{}');
  if (argv.original) {
    // eslint-disable-next-line no-bitwise
    let fieldValue = argv.original.find((item: string): number => ~item.indexOf(`--${field}=`)) || defaultValue;

    if (fieldValue) {
      fieldValue = fieldValue.replace(`--${field}=`, '');
    }

    return fieldValue;
  }

  return defaultValue;
};

export default getScriptQuery;
